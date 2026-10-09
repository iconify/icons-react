import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gulry0b2k.css';
import '../../css/j/jfdl44b3i.css';
import '../../css/b/bfk_0tp3e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gulry0b2k"/><path class="jfdl44b3i"/><path class="bfk_0tp3e"/>`,
		"fallback": "energy-icons:window-48",
	});
}

export default Component;
