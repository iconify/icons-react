import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v--2xbb1l.css';
import '../../css/u/u-db7hb-g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v--2xbb1l"/><path class="u-db7hb-g"/>`,
		"fallback": "vaadin:youtube",
	});
}

export default Component;
