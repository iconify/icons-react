import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d47xi2b9o.css';
import '../../css/a/advyo0b0z.css';
import '../../css/n/nisd5zbwq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d47xi2b9o"/><path class="advyo0b0z"/><path class="nisd5zbwq"/>`,
		"fallback": "formkit:won",
	});
}

export default Component;
