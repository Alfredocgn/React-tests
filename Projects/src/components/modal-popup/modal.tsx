


interface ModalProps {
  id?:string;
  header:string;
  body:React.ReactNode;
  footer:string;
  onClose: () => void;

}

export const Modal: React.FC<ModalProps> = ({id,header,body,footer,onClose}) => {
  return (
    <div id={id || 'Modal'} className="modal">
      <div className="modal-content">
        <div className="header">
          <button onClick={onClose}  className="close-modal-icons">&times;</button>
          <h2>{header ? header : 'Header'}</h2>
        </div>
        <div className="body">
          {
            body ? body : <div> This is our modal body</div>
          }
        </div>
        <div className="footer-modal">

        {
          footer ? footer : <h2>Footer</h2>
        }

        </div>

      </div>
      
    </div>
  )
}
