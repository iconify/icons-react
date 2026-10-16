import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh5sn9n9c.css';
import '../../css/x/x9950ccly.css';
import '../../css/i/il2mnhbbk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qh5sn9n9c"/><path class="x9950ccly"/><path class="il2mnhbbk"/>`,
		"fallback": "energy-icons:worm-gear-20",
	});
}

export default Component;
