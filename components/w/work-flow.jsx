import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lokbx2b5p.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lokbx2b5p"/>`,
		"fallback": "fluent-mdl2:work-flow",
	});
}

export default Component;
