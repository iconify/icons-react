import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0gv3ezgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z0gv3ezgq"/>`,
		"fallback": "streamline-logos:wip-logo-block",
	});
}

export default Component;
