import {useState, useEffect} from 'react';

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/22bdq6.jpg'
    })
    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const response = await res.json()
            setAllMemes(response.data.memes)
        }
        getMemes()
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
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
                        name='topText'
                        value={meme.topText}
                        onChange={handleChange}
                    />
                </label>
                <label className='form-label'>Bottom Text <br />
                    <input
                        type='text'
                        placeholder='Labour policy'
                        className='form-input'
                        name='bottomText'
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </label>
                <button
                    className="form-btn"
                    onClick={getMemeImage}
                >
                    Get new meme image 🖼
                </button>
            </section>
            <section className="meme">
                <img src={meme.randomImage} className="meme-img" alt='meme image'/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </section>
        </main>
    )
}