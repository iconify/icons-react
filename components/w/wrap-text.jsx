import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg8756dje.css';
import '../../css/u/uy2rp8tjn.css';
import '../../css/g/g7pahxd9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg8756dje wm-k"/><path class="uy2rp8tjn wm-a"/><path class="g7pahxd9r wm-a"/>`,
		"fallback": "withicons-bauhaus:wrap-text",
	});
}

export default Component;
