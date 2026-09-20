import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gto01yb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gto01yb5j"/>`,
		"fallback": "streamline-cyber:wine-bottle-glass",
	});
}

export default Component;
