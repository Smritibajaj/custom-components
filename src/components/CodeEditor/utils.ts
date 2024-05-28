export const transformData = data => {
	const output: SuggestionDataItem[] = [];
	data?.forEach(group => {
		group?.params?.forEach(param => {
			if (param?.dataType === 'object') {
				param?.params?.forEach(fieldParam => {
					if (fieldParam?.dataType === 'object') {
						fieldParam.params?.forEach(item => {
							output.push({
								id: `${group?.key}.${param?.key}.${fieldParam.key}.${item.key}`,
								display: item?.label,
								groupName: group?.label,
								subGroupName: param?.label,
								fieldGroup: fieldParam?.label,
							});
						});
					} else {
						output.push({
							id: `${group?.key}.${param?.key}.${fieldParam.key}`,
							display: fieldParam?.label,
							groupName: group?.label,
							subGroupName: param?.label,
							fieldGroup: '',
						});
					}
				});
			} else if (param?.dataType === 'array') {
				param?.item?.params?.forEach(fieldParam => {
					if (fieldParam?.dataType === 'object') {
						fieldParam.params?.forEach(item => {
							output.push({
								id: `${group?.key}.${param?.key}.${fieldParam.key}.${item.key}`,
								display: item?.label,
								groupName: group?.label,
								subGroupName: param?.label,
								fieldGroup: fieldParam?.label,
							});
						});
					} else {
						output.push({
							id: `${group?.key}.${param?.key}.${fieldParam.key}`,
							display: fieldParam?.label,
							groupName: group?.label,
							subGroupName: param?.label,
							fieldGroup: '',
						});
					}
				});
			} else {
				output.push({
					id: `${group?.key}.${param?.key}`,
					display: param?.label,
					groupName: group?.label,
					subGroupName: group?.label,
					fieldGroup: '',
				});
			}
		});
	});

	return output;
};
