import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzg8c0oxb.css';
import '../../css/o/ozx0m_bwd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzg8c0oxb"/><path class="ozx0m_bwd"/>`,
		"fallback": "oui:word-wrap",
	});
}

export default Component;
