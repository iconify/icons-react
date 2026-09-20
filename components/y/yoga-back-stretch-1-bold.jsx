import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj062-b3v.css';
import '../../css/l/lgz6trbkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj062-b3v"/><path class="lgz6trbkv"/>`,
		"fallback": "streamline-ultimate:yoga-back-stretch-1-bold",
	});
}

export default Component;
