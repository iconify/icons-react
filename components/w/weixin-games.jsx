import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/wdqo95bcz.css';
import '../../css/j/jeb--5b6n.css';
import '../../css/n/nnltlszwy.css';
import '../../css/n/nnh7h463t.css';
import '../../css/u/uwj-6ebas.css';
import '../../css/z/zqcrcnwuk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="wdqo95bcz"/><path class="jeb--5b6n"/><path class="nnltlszwy"/><path class="nnh7h463t"/><path class="uwj-6ebas"/><path class="zqcrcnwuk"/></g>`,
		"fallback": "icon-park:weixin-games",
	});
}

export default Component;
