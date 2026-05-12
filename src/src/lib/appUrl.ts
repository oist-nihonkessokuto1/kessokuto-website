/** アプリ内パス（先頭 `/`）を、Vite の `base`（GitHub Pages のサブディレクトリ等）を反映した URL に変換する */
export function appUrl(path: string): string {
	const base = import.meta.env.BASE_URL;
	if (path === '/') {
		return base;
	}
	return base + path.replace(/^\//, '');
}

/** `LocationProvider` の `scope` 用（末尾スラッシュなしのパスプレフィックス） */
export function appScope(): string {
	const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
	return base || '/';
}

/** `<Route path={…}>` 用のホームパス（`useLocation().path` と一致させる） */
export function homeRoutePath(): string {
	const p = appUrl('/').replace(/\/+$/, '');
	return p || '/';
}
