import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/b/b08in11er.css';
import '../../css/l/lmfu3lb6f.css';
import '../../css/a/aslefzbjn.css';
import '../../css/i/idblztryt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="b08in11er"/><path class="lmfu3lb6f"/><path class="aslefzbjn"/><path class="idblztryt"/></g>`,
		"fallback": "icon-park:world",
	});
}

export default Component;
