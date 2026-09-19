import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywgjsyp3r.css';

const viewBox = {"width":78,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywgjsyp3r"/>`,
		"fallback": "garden:wordmark-explore-26",
	});
}

export default Component;
