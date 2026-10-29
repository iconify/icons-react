import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7cw3xbud.css';
import '../../css/p/pyapzsbgi.css';
import '../../css/m/mo6o3slzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7cw3xbud wm-k"/><path class="pyapzsbgi wm-a"/><path class="mo6o3slzv wm-a"/>`,
		"fallback": "withicons-bauhaus:wind",
	});
}

export default Component;
