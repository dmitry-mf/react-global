
import { Home as HomePage } from '../components/home-page/home/Home';
import { DialogContainer } from '../context';
import { configureStore } from '../store';
import { Provider } from 'react-redux';
import '../styles/index.module.scss';

const store = configureStore()

export default function Home() {
    return (
        <Provider store={store}>
            <DialogContainer>
                <HomePage />
            </DialogContainer>
        </Provider>
    );
}