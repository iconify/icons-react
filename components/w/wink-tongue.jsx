import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_lrngbim.css';
import '../../css/p/pfdp8obcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_lrngbim"/><path class="pfdp8obcg"/>`,
		"fallback": "bxs:wink-tongue",
	});
}

export default Component;
