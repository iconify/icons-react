import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9m4xgb3u.css';
import '../../css/f/fbt2ffbmg.css';
import '../../css/r/roslnzb2d.css';
import '../../css/g/gh10ve00x.css';
import '../../css/h/h4j_a1xza.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9m4xgb3u"/><path class="fbt2ffbmg"/><path class="roslnzb2d"/><path class="gh10ve00x"/><path class="h4j_a1xza"/>`,
		"fallback": "tabler-flags:western-sahara",
	});
}

export default Component;
