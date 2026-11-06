// Static copy for the landing page. Kept out of the components so wording can
// change without touching markup.

export const NAV_LINKS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Supported Runtimes', href: '#runtimes' },
]

export const FOOTER_LINKS = [
  ...NAV_LINKS,
  { label: 'Sign In', href: '/login' },
  { label: 'Get Started', href: '/register' },
]

export const HERO_PIPELINE = [
  { label: 'Repository', value: 'github.com/acme/my-app', meta: 'branch: main', state: 'done' },
  { label: 'Build', value: 'Flask · container image', meta: 'passed', ok: true, state: 'done' },
  { label: 'Registry', value: 'my-app:3f9a2c1', meta: 'stored', state: 'done' },
  { label: 'GitOps → Kubernetes', value: 'development', meta: 'deployed', ok: true, state: 'live' },
]

export const APP_META = [
  { label: 'Repository', value: 'acme/my-app' },
  { label: 'Branch', value: 'main' },
  { label: 'Runtime', value: 'Flask' },
  { label: 'Environment', value: 'development' },
]

export const PREVIEW_BUILDS = [
  { image: 'my-app:3f9a2c1', commit: '3f9a2c1' },
  { image: 'my-app:b81e07d', commit: 'b81e07d' },
  { image: 'my-app:5c20ae4', commit: '5c20ae4' },
]

export const STEPS = [
  {
    icon: 'repository',
    title: 'Connect Your Repository',
    text: 'Provide your Git repository and select the branch you want to deploy.',
  },
  {
    icon: 'configure',
    title: 'Configure Your Application',
    text: 'Choose your application runtime and provide the basic configuration.',
  },
  {
    icon: 'build',
    title: 'Build Your Image',
    text: 'DevyOpsy builds your source code into a container image and stores the resulting artifact in a container registry.',
  },
  {
    icon: 'deploy',
    title: 'Deploy Your Application',
    text: 'Choose your build artifact and deployment environment. DevyOpsy generates the required Kubernetes manifests and delivers them through GitOps.',
  },
]

export const RUNTIMES = ['Django', 'Flask', 'Node.js', 'React']

export const ENVIRONMENTS = [
  {
    id: 'development',
    title: 'Development',
    text: 'Test new versions and changes in a development environment.',
  },
  {
    id: 'production',
    title: 'Production',
    text: 'Deploy a selected application artifact to the production environment.',
  },
]

export const FEATURES = [
  {
    title: 'Automated Container Builds',
    text: 'Turn your source repository into a container image without writing or maintaining a Dockerfile pipeline.',
  },
  {
    title: 'Container Image Management',
    text: 'Every build is stored as an image in a container registry, ready to be selected for deployment.',
  },
  {
    title: 'GitOps-based Deployment',
    text: 'Kubernetes manifests are generated for you and delivered through a GitOps workflow.',
  },
  {
    title: 'Kubernetes-powered Runtime',
    text: 'Your application runs on Kubernetes, without you having to set up or operate the cluster.',
  },
  {
    title: 'Application Configuration',
    text: 'Define your runtime and basic settings once, alongside the repository and branch you deploy from.',
  },
  {
    title: 'Build and Deployment History',
    text: 'Look back at previous builds and deployments for each application.',
  },
]
