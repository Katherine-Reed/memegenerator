export default function Meme() {
    return (
        <main className='form'>
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
            >
                Get new meme image 🖼
            </button>
        </main>
    )
}