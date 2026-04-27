import { useEffect, useState } from 'preact/hooks';
import { useLocation } from 'preact-iso';

const navItems = [
	{ href: '/policy', label: '政策' },
	{ href: '/lawmakers', label: '議員' },
	{ href: '/news', label: 'ニュース' },
	{ href: '/elections', label: '選挙' },
	{ href: '/support', label: '支援' },
] as const;

const sidebarLinks = [
	{ href: '/party', label: '基本情報' },
	{ href: '/contact', label: '問い合わせ' },
	{ href: '/media', label: 'メディア' },
] as const;

function MenuIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="h-6 w-6 stroke-current"
			aria-hidden
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
		</svg>
	);
}

export function Header() {
	const { url } = useLocation();
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const closeSidebar = () => setSidebarOpen(false);

	useEffect(() => {
		if (!sidebarOpen) {
			return;
		}
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeSidebar();
			}
		};
		document.addEventListener('keydown', onKey);
		return () => document.removeEventListener('keydown', onKey);
	}, [sidebarOpen]);

	useEffect(() => {
		if (!sidebarOpen) {
			return;
		}
		const prev = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = prev;
		};
	}, [sidebarOpen]);

	return (
		<header class="border-b border-base-300 bg-base-100">
			<nav class="navbar mx-auto max-w-6xl flex-nowrap gap-0 px-4">
				<a
					href="/"
					class="shrink-0 text-2xl font-semibold normal-case tracking-tight text-2xl text-base-content transition-colors hover:text-primary"
				>
					日本結束党
				</a>
				<div class="flex min-w-0 flex-1 items-center justify-end gap-0.5 sm:gap-1">
					<div class="hidden flex-wrap justify-end gap-0.5 md:flex">
						{navItems.map((item) => (
							<a
								href={item.href}
								class={`rounded-md px-3 py-2 font-medium transition-colors hover:bg-base-200 ${
									url === item.href ? 'bg-base-200 text-primary' : 'text-base-content'
								}`}
							>
								{item.label}
							</a>
						))}
					</div>
					<div class="dropdown dropdown-end md:hidden">
						<button type="button" class="btn btn-ghost btn-sm" aria-label="主要ページ">
							<MenuIcon />
						</button>
						<ul class="menu dropdown-content z-10 mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
							{navItems.map((item) => (
								<li>
									<a href={item.href} class={url === item.href ? 'active' : ''}>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</div>
					<button
						type="button"
						class="btn btn-ghost btn-sm"
						aria-label="補足メニュー"
						aria-expanded={sidebarOpen}
						aria-controls="site-sidebar"
						onClick={() => setSidebarOpen((o) => !o)}
					>
						<MenuIcon />
					</button>
				</div>
			</nav>

			{/* オーバーレイ */}
			<div
				role="presentation"
				class={`fixed inset-0 z-40 bg-base-content/20 transition-opacity duration-200 ${
					sidebarOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
				}`}
				onClick={closeSidebar}
			/>
			{/* 右サイドバー */}
			<aside
				id="site-sidebar"
				role="dialog"
				aria-modal="true"
				aria-label="補足メニュー"
				class={`fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-base-300 bg-base-100 shadow-lg transition-transform duration-200 ease-out ${
					sidebarOpen ? 'translate-x-0' : 'pointer-events-none translate-x-full'
				}`}
			>
				<div class="flex items-center justify-between border-b border-base-300 px-4 py-3">
					<button
						type="button"
						class="btn btn-ghost btn-sm btn-square"
						aria-label="閉じる"
						onClick={closeSidebar}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="h-5 w-5 stroke-current"
							aria-hidden
						>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<nav class="min-h-0 flex-1 overflow-y-auto p-4">
					<ul class="space-y-1">
						{sidebarLinks.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									class={`link link-hover block py-2 text-base ${
										url === link.href ? 'font-semibold text-primary' : ''
									}`}
									onClick={closeSidebar}
									aria-current={url === link.href ? 'page' : undefined}
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</aside>
		</header>
	);
}
