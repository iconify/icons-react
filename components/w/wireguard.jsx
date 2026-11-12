import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5htat2ww.css';
import '../../css/s/sforiwebk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="d5htat2ww"/><path class="sforiwebk"/>`,
		"fallback": "selfhst:wireguard",
	});
}

export default Component;
