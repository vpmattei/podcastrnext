import Document, {Html, Head, Main, NextScript} from 'next/Document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="http://fonts.gstatic.com"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>    
        )
    }
}