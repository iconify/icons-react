import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_medy5gw.css';
import '../../css/w/wd_9hbcol.css';
import '../../css/w/woowbybcs.css';
import '../../css/w/wv0hdzbhs.css';
import '../../css/t/tv1xwfcle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_medy5gw"/><path class="wd_9hbcol"/><path class="woowbybcs"/><path class="wv0hdzbhs"/><path class="tv1xwfcle"/>`,
		"fallback": "solar:wi-fi-cross-bold",
	});
}

export default Component;
