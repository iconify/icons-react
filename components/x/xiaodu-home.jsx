import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/t/tg26qtbbz.css';
import '../../css/t/ts1dqou4v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGeEoxJdMU"><g class="aql7dnt-u"><path class="tg26qtbbz"/><path class="ts1dqou4v"/></g></mask></defs><path mask="url(#SVGeEoxJdMU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:xiaodu-home",
	});
}

export default Component;
