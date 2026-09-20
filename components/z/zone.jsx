import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qto03pbfn.css';
import '../../css/h/hemx3sbcg.css';
import '../../css/d/dk02ivbjy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qto03pbfn"/><path clip-rule="evenodd" class="hemx3sbcg"/><path class="dk02ivbjy"/>`,
		"fallback": "ix:zone",
	});
}

export default Component;
