import {useState} from 'react';
import memesData from '../memesData';

export default function Meme() {
    const [memeImage, setMemeImage] = useState('')

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    return (
        <main>
            <section className='form'>
                <label className="form-label">Top Text <br/>
                    <input
                        type='text'
                        placeholder='one does not simply'
                        className='form-input'
                    />
                </label>
                <label className='form-label'>Bottom Text <br />
                    <input
                        type='text'
                        placeholder='create a new meme'
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
                src={memeImage}
                alt='meme image'
                className='meme-img'
            />
        </main>
    )
}