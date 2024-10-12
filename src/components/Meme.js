import {useState} from 'react';
import memesData from '../memesData';

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/22bdq6.jpg'
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
        <main>
            <section className='form'>
                <label className="form-label">Top Text <br/>
                    <input
                        type='text'
                        placeholder='trans rights'
                        className='form-input'
                    />
                </label>
                <label className='form-label'>Bottom Text <br />
                    <input
                        type='text'
                        placeholder='Labour party'
                        className='form-input'
                    />
                </label>
                <button
                    className="form-btn"
                    onClick={getMemeImage}
                >
                    Get new meme image 🖼
                </button>
            </section>
            <img
                src={meme.randomImage}
                alt='meme image'
                className='meme-img'
            />
        </main>
    )
}