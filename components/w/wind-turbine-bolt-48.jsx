import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3kxc0e1n.css';
import '../../css/y/y8netlxfj.css';
import '../../css/f/foaw4bimw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3kxc0e1n"/><path class="y8netlxfj"/><path class="foaw4bimw"/>`,
		"fallback": "energy-icons:wind-turbine-bolt-48",
	});
}

export default Component;
