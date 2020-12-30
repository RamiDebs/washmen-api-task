let Sort = {

    quickSort: (distances, companies, left, right) => {
        var index;
        if (distances.length > 1) {
            index = partition(distances, companies, left, right); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                Sort.quickSort(distances, companies, left, index - 1);
            }
            if (index < right) { //more elements on the right side of the pivot
                Sort.quickSort(distances, companies, index, right);
            }
        }
        return companies;

    },

    val: () => {
        return 12;
    }

}

function swap(distances, companies, leftIndex, rightIndex) {
    var temp = distances[leftIndex];
    distances[leftIndex] = distances[rightIndex];
    distances[rightIndex] = temp;
    var companyTemp = companies[leftIndex];
    companies[leftIndex] = companies[rightIndex];
    companies[rightIndex] = companyTemp;
}

function partition(distances, companies, left, right) {
    var pivot = distances[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (distances[i] < pivot) {
            i++;
        }
        while (distances[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(distances, companies, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

module.exports = Sort;