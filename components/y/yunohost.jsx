import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5g66wbkc.css';
import '../../css/u/uk5liicmj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5g66wbkc"/><path class="uk5liicmj"/>`,
		"fallback": "selfhst:yunohost",
	});
}

export default Component;
