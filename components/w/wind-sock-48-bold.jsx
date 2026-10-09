import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l359dqins.css';
import '../../css/d/dcw38u4hx.css';
import '../../css/f/f7u3lacne.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l359dqins"/><path class="dcw38u4hx"/><path class="f7u3lacne"/>`,
		"fallback": "energy-icons:wind-sock-48-bold",
	});
}

export default Component;
