def solution(a, b, flag):
    if flag is True :
        answer = a + b
        flag = False
    elif flag is False :
        answer = a - b
        flag = True
    return answer