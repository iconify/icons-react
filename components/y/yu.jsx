import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/wqbbqwb-i.css';
import '../../css/w/w260_6bbu.css';
import '../../css/b/b2n3vku2e.css';
import '../../css/n/n8gmovbqt.css';
import '../../css/x/xwbp-8bsj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="wqbbqwb-i"/><path class="w260_6bbu"/><path class="b2n3vku2e"/><path class="n8gmovbqt"/><path class="xwbp-8bsj"/></g>`,
		"fallback": "circle-flags:yu",
	});
}

export default Component;
