import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbtmjqbhg.css';
import '../../css/g/g_8nuxb3n.css';

const viewBox = {"width":153.85,"height":30.475,"left":-0.863,"top":-0.863};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbtmjqbhg"/><path class="g_8nuxb3n"/>`,
		"fallback": "thesvg-color:westpac",
	});
}

export default Component;
