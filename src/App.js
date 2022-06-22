import './App.css';

import { Menu, MenuLink } from './components/Menu';
import { Button, Input, Textarea } from './components/Form';
import { Card } from './components/Card';
import { Employees } from './components/Employees';

function App() {
  const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20,
      paddingTop: 20,
      paddingBottom: 20,
    }
  }
  return (
    <>
    <Menu>
      <MenuLink to="/">Home</MenuLink>
      <MenuLink to="/about">About</MenuLink>
      <MenuLink to="/contact" isActive>Contact</MenuLink>
      <MenuLink to="/posts">Posts</MenuLink>
    </Menu>
    <div style={styles.form}>
      <Input />
      <Textarea />
      <Button bgColor='red'> click me!</Button>
    </div>
    <Card
      title='Shrimp and Chorizo Paella'
      intro='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
      content='Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes....'
    />
    <Employees/>
    </>
  );
}

export default App;