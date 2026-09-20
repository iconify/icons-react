import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kszoi5bnf.css';
import '../../css/v/vt74m5b-v.css';
import '../../css/j/jmbmabbpr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kszoi5bnf"/><path class="vt74m5b-v"/><path class="jmbmabbpr"/>`,
		"fallback": "selfhst:western-digital",
	});
}

export default Component;
