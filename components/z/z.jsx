import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llnp5hb-f.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llnp5hb-f"/>`,
		"fallback": "fa7-solid:z",
	});
}

export default Component;
