import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/r/r3q87t2xg.css';
import '../../css/f/fikliz6gw.css';
import '../../css/g/gln_2zbqm.css';
import '../../css/n/nvckckbkx.css';
import '../../css/p/p8baf4qid.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGfOttLcHM"><g class="wwvp95byt"><path class="r3q87t2xg"/><path class="fikliz6gw"/><path class="gln_2zbqm"/><path class="nvckckbkx"/><path class="p8baf4qid"/></g></mask></defs><path mask="url(#SVGfOttLcHM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:worker",
	});
}

export default Component;
