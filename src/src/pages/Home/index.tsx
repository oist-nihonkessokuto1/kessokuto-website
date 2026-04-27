const policies = [
	{
		title: '自治協同',
		description: '地方自治と協同組合的な結束を推進し、草の根から分断の解消を目指します。',
	},
	{
		title: '万邦共栄',
		description: '民族自決を尊重しながら、共栄の理念にもとづく国際秩序の構築を掲げます。',
	},
	{
		title: '経済離陸',
		description: '衰退途上国化からの脱却に向け、経済的自立と急成長を重視します。',
	},
] as const;

const newsTopics = ['イラン戦争', '自転車取締り'] as const;

const supportLinks = [
	{ label: '入党', description: '綱領と規約を確認し、活動への参加を検討する' },
	{ label: '党員募集', description: '地域と政策づくりを支える仲間として加わる' },
	{ label: 'サポーター', description: 'できる範囲で情報発信や活動を支援する' },
	{ label: 'ボランティア', description: '街頭活動、イベント、制作などを手伝う' },
	{ label: '寄付', description: '公開された案内に沿って政治活動を支援する' },
] as const;

const siteSections = [
	{ href: '/policy', title: '政策', text: '国家観、立ち向かう課題、主要政策を確認する' },
	{ href: '/lawmakers', title: '議員', text: '所属議員、候補予定者、役員の情報へ進む' },
	{ href: '/elections', title: '選挙', text: '選挙日程、候補者、公認情報、結果を見る' },
	{ href: '/party', title: '基本情報', text: '綱領、規約、所在地、党の歴史を確認する' },
	{ href: '/contact', title: '問い合わせ', text: '問い合わせ、意見投稿、よくある質問へ進む' },
	{ href: '/media', title: 'メディア', text: 'YouTube、SNS、動画、出演情報を探す' },
] as const;

export function Home() {
	return (
		<div class="min-h-screen bg-base-100 text-base-content">
			<section class="relative overflow-hidden">
				<div class="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
				<div class="pointer-events-none absolute -bottom-40 -left-28 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
				<div class="relative z-10 mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
					<div>
						<p class="mb-4 inline-flex rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
							結束主義 × 共栄主義
						</p>
						<h1 class="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
							分断を超え、自治と共栄で次の日本をつくる。
						</h1>
						<p class="mt-6 max-w-2xl text-lg leading-8 text-base-800">
							日本結束党は、政治・社会・経済の分断と衰退に向き合い、自治協同、万邦共栄、経済離陸を柱に、平和的で建設的な変革を掲げます。
						</p>
						<div class="mt-8 flex flex-col gap-3 sm:flex-row">
							<a href="/policy" class="btn btn-primary">
								政策を読む
							</a>
							<a href="/support" class="btn btn-outline btn-primary">
								支援に参加する
							</a>
						</div>
					</div>

					<div class="rounded-3xl border border-base-300 bg-base-200/80 p-6 shadow-2xl shadow-primary/10">
						<p class="text-sm font-semibold text-primary">私たちが立ち向かうもの</p>
						<ul class="mt-5 space-y-4">
							<li class="rounded-2xl bg-base-100 p-4">
								<h2 class="font-semibold">国内の分断と衰退</h2>
								<p class="mt-2 text-sm leading-6 text-base-700">政治・社会・経済の分断を解消し、衰退からの転換を目指します。</p>
							</li>
							<li class="rounded-2xl bg-base-100 p-4">
								<h2 class="font-semibold">既存体制への問題提起</h2>
								<p class="mt-2 text-sm leading-6 text-base-700">議会制・自由主義体制を分断の構造として捉え、対抗政府の構築を掲げます。</p>
							</li>
							<li class="rounded-2xl bg-base-100 p-4">
								<h2 class="font-semibold">主権侵害への対峙</h2>
								<p class="mt-2 text-sm leading-6 text-base-700">民族自決を尊重し、共栄の理念に反する干渉を非難します。</p>
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section class="mx-auto max-w-6xl px-4 py-14">
				<div class="max-w-3xl">
					<p class="text-sm font-semibold text-primary">主要政策</p>
					<h2 class="mt-3 text-3xl font-bold tracking-tight">三つの柱から政策を探す</h2>
					<p class="mt-4 leading-7 text-base-800">トップページでは、詳しい政策ページへ進む前に全体像をつかめるよう、政策体系を三つの入口に整理しています。</p>
				</div>
				<div class="mt-8 grid gap-4 md:grid-cols-3">
					{policies.map((policy) => (
						<article key={policy.title} class="card border border-base-300 bg-base-200">
							<div class="card-body">
								<h3 class="card-title text-primary">{policy.title}</h3>
								<p class="leading-7 text-base-800">{policy.description}</p>
							</div>
						</article>
					))}
				</div>
			</section>

			<section class="border-y border-base-300 bg-base-200/60">
				<div class="mx-auto grid max-w-6xl gap-8 px-4 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
					<div>
						<p class="text-sm font-semibold text-primary">ニュース</p>
						<h2 class="mt-3 text-3xl font-bold tracking-tight">いま扱う論点</h2>
						<p class="mt-4 leading-7 text-base-800">ニュースは日付、見出し、本文、関連リンクを追加しやすい構造で更新していきます。</p>
						<a href="/news" class="btn btn-link mt-4 px-0 text-primary">
							ニュース一覧へ
						</a>
					</div>
					<div class="grid gap-4 sm:grid-cols-2">
						{newsTopics.map((topic) => (
							<article key={topic} class="rounded-2xl border border-base-300 bg-base-100 p-5">
								<p class="text-xs font-semibold uppercase tracking-[0.24em] text-base-600">Topic</p>
								<h3 class="mt-3 text-xl font-semibold">{topic}</h3>
								<p class="mt-3 text-sm leading-6 text-base-700">関連する見解、解説、資料を掲載するための入口です。</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section class="mx-auto max-w-6xl px-4 py-14">
				<div class="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
					<div>
						<p class="text-sm font-semibold text-primary">支援</p>
						<h2 class="mt-3 text-3xl font-bold tracking-tight">参加方法を選ぶ</h2>
						<p class="mt-4 leading-7 text-base-800">入党、党員募集、サポーター、ボランティア、寄付の導線をまとめ、関心の段階に応じて参加しやすくします。</p>
					</div>
					<div class="grid gap-3">
						{supportLinks.map((link) => (
							<a key={link.label} href="/support" class="rounded-2xl border border-base-300 bg-base-200 p-5 transition hover:border-primary hover:bg-base-300">
								<span class="font-semibold text-primary">{link.label}</span>
								<span class="mt-2 block text-sm leading-6 text-base-800">{link.description}</span>
							</a>
						))}
					</div>
				</div>
			</section>

			<section class="mx-auto max-w-6xl px-4 pb-20">
				<div class="rounded-3xl border border-base-300 bg-base-200 p-6 sm:p-8">
					<div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
						<div>
							<p class="text-sm font-semibold text-primary">サイト案内</p>
							<h2 class="mt-3 text-3xl font-bold tracking-tight">知りたい情報へ進む</h2>
						</div>
						<a href="/contact" class="btn btn-accent">
							問い合わせ
						</a>
					</div>
					<div class="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{siteSections.map((section) => (
							<a key={section.href} href={section.href} class="rounded-2xl bg-base-100 p-5 transition hover:bg-base-300">
								<h3 class="font-semibold">{section.title}</h3>
								<p class="mt-2 text-sm leading-6 text-base-700">{section.text}</p>
							</a>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
