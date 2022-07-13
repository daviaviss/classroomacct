import react from 'react'

const HelloWorld = ({ texto, cor, fontSize }) => {
    const date = new Date()

    return (

        <div class="container">
            <div class="mydiv">
                <h1 style = {{ color: cor, fontSize: fontSize }}>{ texto }</h1>
                <p>{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</p>
            </div>
        </div>

    ); 
}

export default HelloWorld;