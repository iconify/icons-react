import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7wx7kbhp.css';
import '../../css/d/df7nqu-tw.css';
import '../../css/x/xuj0q8iic.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/r/r9yi4tzrn.css';
import '../../css/k/kchiyjp3t.css';
import '../../css/w/whlta5bix.css';
import '../../css/x/xbm3u3vvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7wx7kbhp"/><path clip-rule="evenodd" class="df7nqu-tw"/><path class="xuj0q8iic"/><g class="xtpeb-edw"><path class="r9yi4tzrn"/><path class="kchiyjp3t"/><path class="whlta5bix"/><path class="xbm3u3vvm"/></g>`,
		"fallback": "solar:wi-fi-router-round-bold-duotone",
	});
}

export default Component;
