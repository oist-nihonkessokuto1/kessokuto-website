import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';

import { Header } from './components/Header';
import { appScope, homeRoutePath } from './lib/appUrl';
import { Home } from './pages/Home';
import { NotFound } from './pages/_404';
import './style.css';

export function App() {
	return (
		<LocationProvider scope={appScope()}>
			<Header />
			<main>
				<Router>
					<Route path={homeRoutePath()} component={Home} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
