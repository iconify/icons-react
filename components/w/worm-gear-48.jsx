import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj8ilnbfl.css';
import '../../css/i/i7ws4lb4n.css';
import '../../css/c/cn0l77biu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj8ilnbfl"/><path class="i7ws4lb4n"/><path class="cn0l77biu"/>`,
		"fallback": "energy-icons:worm-gear-48",
	});
}

export default Component;
