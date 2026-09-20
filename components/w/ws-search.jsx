import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqq917u9h.css';
import '../../css/a/ajn-ykgrr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bqq917u9h"/><path clip-rule="evenodd" class="ajn-ykgrr"/>`,
		"fallback": "oui:ws-search",
	});
}

export default Component;
