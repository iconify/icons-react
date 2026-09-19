import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/z/zxk766oyl.css';
import '../../css/j/jh3nhmbqj.css';
import '../../css/v/vzy2d-bwr.css';
import '../../css/h/hdhildocg.css';
import '../../css/w/wf_bbxl6s.css';
import '../../css/g/gfb-b7hwa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="zxk766oyl"/><path class="jh3nhmbqj"/><path class="vzy2d-bwr"/><path class="hdhildocg"/><path class="wf_bbxl6s"/><path class="gfb-b7hwa"/></g>`,
		"fallback": "icon-park:zoom-internal",
	});
}

export default Component;
