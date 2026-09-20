import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw6l45h2h.css';
import '../../css/c/c89ohuy8c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw6l45h2h"/><path class="c89ohuy8c"/>`,
		"fallback": "temaki:zip-wire",
	});
}

export default Component;
