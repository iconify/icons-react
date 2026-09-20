import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhc8dieas.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhc8dieas"/>`,
		"fallback": "wi:wmo4680-03",
	});
}

export default Component;
