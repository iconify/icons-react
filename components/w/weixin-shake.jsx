import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/k/kli-63hdb.css';
import '../../css/i/ija0yfmyy.css';
import '../../css/w/wohmv9l7b.css';
import '../../css/l/llpy3-msl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="kli-63hdb"/><path class="ija0yfmyy"/><path class="wohmv9l7b"/><path class="llpy3-msl"/></g>`,
		"fallback": "icon-park:weixin-shake",
	});
}

export default Component;
