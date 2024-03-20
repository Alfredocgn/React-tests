import { useLocalStorage } from "./useLocalStorage"
import './theme.css'




export const LightDarkMode = () => {

  const [theme,setTheme] = useLocalStorage('theme','dark')


  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    console.log(theme)
  }


  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="continer">
        <p>Hello World</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  )
}
