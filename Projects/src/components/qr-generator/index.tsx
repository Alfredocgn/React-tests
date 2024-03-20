import { useState } from "react"
import QRCode from "react-qr-code"




export const QrGenerator = () => {

  const [qrCode,setQrCode] = useState<string>('')
  const [input,setInput] = useState<string>('')

  const handleGenerateQrCode = () => {
    setQrCode(input)
    setInput('')
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input type="text" name="qr-code" placeholder="Enter your value here" value={input} onChange={(e) => setInput(e.target.value)}  />
        <button disabled={input && input.trim() !== '' ? false : true} onClick={handleGenerateQrCode} >Generate</button>
      </div>
      <div>
        <QRCode 
        id="qr-code-value"
        value={qrCode}
        size={400}
        bgColor="#fff"
        />
      </div>
    </div>
  )
}
