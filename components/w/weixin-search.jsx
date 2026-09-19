import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xv6ssv52d.css';
import '../../css/n/nfwf-ozqa.css';
import '../../css/u/u_626v-kh.css';
import '../../css/a/avfv4-w5w.css';
import '../../css/k/kfknmnb9u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="xv6ssv52d"/><path class="nfwf-ozqa"/><path class="u_626v-kh"/><path class="avfv4-w5w"/><path class="kfknmnb9u"/></g>`,
		"fallback": "icon-park:weixin-search",
	});
}

export default Component;
